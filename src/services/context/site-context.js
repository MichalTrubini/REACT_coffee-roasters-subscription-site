//CONTEXT HAS NOT BEEN USED IN THE END
//REDUX TOOLKIT IMPLEMENTED

import React, { createContext, useState } from "react";

const SiteContext = createContext();

export function SiteProvider({children}) {

    const typeOne = ["Capsule","Filter","Espresso"];
    const typeTwo = ["Single Origin","Decaf","Blended"];
    const typeThree = ["250g","500g","1000g"];
    const typeFour = ["Wholebean","Filter ","Cafetiére"];
    const typeFive = ["Every week","Every 2 weeks","Every month"];

    //STATES

    const [showMenu, setShowMenu] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [clickedID, setClickedID] = useState([]);
    const [selectedOne, setSelectedOne] = useState('...');
    const [selectedTwo, setSelectedTwo] = useState('...');
    const [selectedThree, setSelectedThree] = useState('...');
    const [selectedFour, setSelectedFour] = useState('...');
    const [selectedFive, setSelectedFive] = useState('...');
    const [selectioInComplete, setSelectionIncomplete] = useState(false);
  
    const resultSelection = [selectedOne, selectedTwo, selectedThree, selectedFour, selectedFive];
    
    //HANDLERS

    const showMenuHandler = () => {
      setShowMenu(prevValue => !prevValue)
    }
  
    const orderSummaryHandler = () => {
      setShowSummary(true);
    }
    
    const checkoutHandler = () => {
        setShowSummary(false);
        }

    const selectionHandler = (event) => {
    if (typeOne.includes(event.target.getAttribute('dataid'))) setSelectedOne(event.target.getAttribute('dataid'));
    if (typeTwo.includes(event.target.getAttribute('dataid'))) setSelectedTwo(event.target.getAttribute('dataid'));
    if (typeThree.includes(event.target.getAttribute('dataid'))) setSelectedThree(event.target.getAttribute('dataid'));
    if (typeFour.includes(event.target.getAttribute('dataid'))) setSelectedFour(event.target.getAttribute('dataid'));
    if (typeFive.includes(event.target.getAttribute('dataid'))) setSelectedFive(event.target.getAttribute('dataid'));
    }

    const orderSummaryChecker = () => {
    if (resultSelection.includes('...')) setSelectionIncomplete(true)
    else {setSelectionIncomplete(false); orderSummaryHandler()};
    }
        

    const expandHandler = (event) => {

            let old = [...clickedID];
        
            setClickedID(() => {
              const index = old.indexOf(event.target.id);
        
              index ===  -1  ? old.push(event.target.id) : old.splice(index,1);
        
              return old;
            })
    }

    return (
        <SiteContext.Provider value={{showMenu, showSummary, clickedID, resultSelection, selectioInComplete, showMenuHandler,orderSummaryHandler,checkoutHandler, setClickedID, expandHandler, selectionHandler, orderSummaryChecker}}>
            {children}
        </SiteContext.Provider>
    )
} 
 
export default SiteContext;