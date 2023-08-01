/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import SearchBar from './src/components/searchBar/searchbar';
import ButtonCustom from './src/components/button/button';
import CardComponent from './src/components/card/card';

const App = () => {
  const [text, setText] = useState('');
  const [words, setWords] = useState([]);

  const handleSearch = (input) => setText(input);

  const handleButtonPress = () => {
    if (text.trim() !== '') {
      setWords((prevWords) => [...prevWords, text.trim()]);
      //[...prevWords] dizi yayılma (spread) sözdizimidir. Bu, önceki state'in (prevWords) tüm öğelerini içeren yeni bir dizi oluşturur.
      //text.trim() yeni elemandır ve mevcut girdiyi temsil eder, ancak girdinin başında ve sonunda bulunan boşluklar (trim() yöntemi ile) kaldırılmıştır. Bu, kelimenin gereksiz boşluklar olmadan saklanmasını sağlar.
      setText('');
    }
  };

  return (
    <SafeAreaView>
      <SearchBar onSearch={handleSearch} />
      <ButtonCustom onPress={handleButtonPress} />
      <FlatList data={words} renderItem={({ item }) => <CardComponent title={item} />} />
    </SafeAreaView>
  );
};

export default App;
