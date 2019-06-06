import * as React from 'react';
import {AxiosInstance} from "axios";

interface DefaultValue {
    client: AxiosInstance | null
}

const defaultValue: DefaultValue = {
    client: null
};

export const HttpClientContext = React.createContext(defaultValue)