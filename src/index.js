import React from "react";
import ReactDOM from "react-dom";
import SideMenu from 'react-sidemenu'
import "react-sidemenu/dist/side-menu.css"



function App() {

 const items = [
  {divider: true, label: 'Main navigation', value: 'main-nav'},
  {label: 'item 1', value: 'item1', icon: 'fa-search',
  children: [
    {label: 'item 1.1', value: 'item1.1', icon: 'fa-snapchat',
    children: [
      {label: 'item 1.1.1', value: 'item1.1.1', icon: 'fa-anchor'},
      {label: 'item 1.1.2', value: 'item1.1.2', icon: 'fa-bar-chart'}]},
    {label: 'item 1.2', value: 'item1.2'}]},
  {label: 'item 2', value: 'item2', icon: 'fa-automobile',
  children: [
    {label: 'item 2.1', value: 'item2.1',
    children: [
      {label: 'item 2.1.1', value: 'item2.1.1'},
      {label: 'item 2.1.2', value: 'item2.1.2'}]},
    {label: 'item 2.2', value: 'item2.2'}]},
  {divider: true, label: 'Motors', value: 'motors-nav'},
  {label: 'item 3', value: 'venue', icon: 'fa-beer'}
]


    return (<SideMenu items={items}/>);
}
   
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
