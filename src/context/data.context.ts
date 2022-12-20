import { createContext } from 'react';
import { dataController } from '../controller/data.controller';

const contextData = createContext(dataController);
export default contextData;
