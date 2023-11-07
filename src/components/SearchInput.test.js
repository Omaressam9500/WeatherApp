import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from './SearchBar';
import {WeatherCountryItem} from '../components/WeatherCountryItem';
import renderer from 'react-test-renderer';
test('Should apply the value when changing text', () => {
  const handleSearchValue = jest.fn()
  const { getByTestId } = render(<SearchBar handleSearchValue={handleSearchValue} countriesList={[]} onCountrySelect={() => { }} />);
  const input = getByTestId('input');
  fireEvent.changeText(input, "test");
  expect(input.props.value).toBe('test');
  expect(handleSearchValue).toHaveBeenCalledWith('test');
});

test('WeatherCountryItem snapshot test', () => {
const data = {
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    },
    temp_f: 77.4,
  };


  const tree = renderer.create(<WeatherCountryItem conditionItem={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});

