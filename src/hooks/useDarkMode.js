import {useLocalStorage} from './useLocalStorage';
import {useState, useEffect} from 'react';
import React from 'react';


export const useDarkMode  = () => {

    const [darkMode , setDarkMode] = useLocalStorage('isOn', true);

 useEffect(() => {
     if (darkMode) {
         let item = document.querySelector('body');
         item.classList.add('dark-mode');

     }else{
        let item = document.querySelector('body');
        item.classList.remove('dark-mode');
     }
 }, [darkMode]);

 return [darkMode, setDarkMode]
}