import "@src/assets/styles/global.css";
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import ReactDOM from 'react-dom/client'

import {ToastContainer, Zoom} from "react-toastify";
import {setupInterceptorsTo} from "@config/configAxios";
import {BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from "axios";
import App from './App'

setupInterceptorsTo(axios);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    
                    <ToastContainer
                          position="top-right"
                          transition={Zoom}
                          autoClose={5000}
                          draggable={false}
                          rtl
                          newestOnTop
                          closeOnClick
                          pauseOnFocusLoss
                      />

                    <BrowserRouter>
                        <QueryClientProvider client={queryClient}>
                            <App/>
                            { import.meta.env.VITE_NODE_ENV === 'development' && (
                                <ReactQueryDevtools initialIsOpen={false} /> )}
                        </QueryClientProvider>
                    </BrowserRouter>


    </React.StrictMode>,
)
