import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import loginSlice from "./loginSlice";
import aiSlice from "./aiSlice";
import blockChainSlice from "./blockChainSlice";
import arvrSlice from "./arvrSlice";
import uiuxSlice from "./uiuxSlice";
import openpositionSlice from "./openpositionSlice";
import landingPageSlice from "./landingPageSlice";
import customServiceSlice from "./customServiceSlice";
import offShoreSlice from "./offShoreSlice";
import offshoreserviceSlice from "./offshoreserviceSlice";
import mobdevSlice from "./mobdevSlice";
import webdevSlice from "./webdevSlice";
import productresearchSlice from "./productresearchSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    login: loginSlice,
    ai: aiSlice,
    blockChain: blockChainSlice,
    arvr: arvrSlice,
    uiux: uiuxSlice,
    openPosition: openpositionSlice,
    landingPage: landingPageSlice,
    customService: customServiceSlice,
    offShore: offShoreSlice,
    offshoreservice:offshoreserviceSlice,
    mobdev: mobdevSlice, 
    webdev:webdevSlice,
    productresearch: productresearchSlice,
  },
});
