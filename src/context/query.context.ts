import { createContext } from 'react';
import useQueryContext from '../hooks/useQueryContext';

const QueryContext = createContext({} as ReturnType<typeof useQueryContext>);
export default QueryContext;
