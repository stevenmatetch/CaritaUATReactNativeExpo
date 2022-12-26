import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test = () => {
    const exampleParse = ()=> {
        const text = `<bookstore> 
       <book category="cooking"> 
           <title lang="en">Everyday Italian</title> 
           <author>Giada De Laurentiis</author> 
           <year>2005</year> 
           <price>30.00</price> </book> 
       <book category="children"> 
           <title lang="en">Harry Potter</title> 
           <author>J K. Rowling</author> 
           <year>2005</year> 
           <price>29.99</price> </book> 
       <book category="web"> 
           <title lang="en">XQuery Kick Start</title> 
           <author>James McGovern</author> 
           <author>Per Bothner</author> 
           <author>Kurt Cagle</author> 
           <author>James Linn</author> 
           <author>Vaidyanathan Nagarajan</author> 
           <year>2003</year> 
           <price>49.99</price> </book> 
       <book category="web" cover="paperback"> 
           <title lang="en">Learning XML</title> 
           <author>Erik T. Ray</author> 
           <year>2003</year> 
           <price>39.95</price> </book> 
    </bookstore>`;
    
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text);
    
        console.log("XmlTest.exampleParse " + xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue);}
    
  return (
    <View>
        <exampleParse></exampleParse>
     
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})


window.DOMParser = require('xmldom').DOMParser;


