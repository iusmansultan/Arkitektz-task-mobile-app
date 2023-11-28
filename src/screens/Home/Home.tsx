import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Modal,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import _debounce from 'lodash/debounce'; // Import the debounce function from lodash
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';
import AxiosCall from '../../utils/AxiosCall';
import commonStyles from '../../helpers/CommonStyles';
import GifCard from '../../components/GifCard/GifCard';

const Home = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState({
    total_count: 0,
    page: 1,
    limit: 15,
    offset: 0,
  });
  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const offset = (pagination.page - 1) * pagination.limit;
      const url = `https://api.giphy.com/v1/gifs/trending?api_key=hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk&limit=${pagination.limit}&offset=${offset}`;
      setLoading(true);
      const response = await AxiosCall({
        url: url,
        method: 'get',
      });
      setLoading(false);
      setPagination(prevState => ({
        total_count: response.pagination.total_count,
        page: prevState.page + 1,
        limit: 15,
        offset: response.pagination.offset,
      }));
      setData([...data, ...response.data]);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  const fetchDataOnSearch = useCallback(
    _debounce(async (text: string) => {
      try {
        setData([]);
        setPagination({
          total_count: 0,
          page: 1,
          limit: 15,
          offset: 0,
        });
        const offset = (pagination.page - 1) * pagination.limit;
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=hKd8RAuyG9yTm72kRFWoMZ7TrD4smRQk&limit=${pagination.limit}&offset=${offset}&q=${text}`;
        setLoading(true);
        const response = await AxiosCall({
          url: url,
          method: 'get',
        });
        setLoading(false);
        setPagination(prevState => ({
          total_count: response.pagination.total_count,
          page: prevState.page + 1,
          limit: 15,
          offset: response.pagination.offset,
        }));
        setData([...data, ...response.data]);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }, 300), // Set the debounce delay (in milliseconds)
    [],
  );

  const onReachedEnd = () => {
    if (pagination.offset < pagination.total_count) {
      if (search !== '') {
        fetchDataOnSearch(search);
      } else {
        fetchData();
      }
    }
  };
  const onRefresh = async () => {
    setRefreshing(true);

    try {
      setPagination({
        total_count: 0,
        page: 1,
        limit: 15,
        offset: 0,
      });
      await fetchData();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };

  const onChangeSearchText = (text: string) => {
    setSearch(text);
    fetchDataOnSearch(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loader />}
      <View
        style={[
          commonStyles.dFlexCenterRow,
          styles.header,
          commonStyles.sWidth,
        ]}>
        <Image
          source={require('../../assets/images/looogo.png')}
          style={styles.logo}
        />
      </View>

      <SearchContainer
        onChangeText={(text: string) => onChangeSearchText(text)}
        value={search}
      />

      <FlatList
        data={data}
        renderItem={({item}) => <GifCard item={item} />}
        keyExtractor={(item: any, index: number) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          onReachedEnd();
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#000" // Change the loading indicator color
          />
        }
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default Home;

const SearchContainer = ({onChangeText, value}) => {
  return (
    <View
      style={[
        styles.searchContainer,
        commonStyles.dFlexStartRow,
        commonStyles.gap10,
      ]}>
      <Image
        source={require('../../assets/icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        onChangeText={(text: string) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const Loader = () => {
  return (
    <View style={styles.centeredView}>
      <Modal transparent={true} visible={true}>
        <View style={styles.Indicator}>
          <View style={styles.rectangle}>
            <ActivityIndicator
              style={{alignSelf: 'center'}}
              animating={true}
              size={'small'}
              color="white"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
