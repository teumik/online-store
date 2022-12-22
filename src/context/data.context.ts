import { createContext } from 'react';
import { dataController } from '../controller/data.controller';

const DataContext = createContext(dataController);
export default DataContext;
