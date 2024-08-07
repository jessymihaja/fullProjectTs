import './App.css';
import ItemsList from './component/ItemList';
import EmployeList from './page/employeList';
import useAxios from './utils/hooks/AxiosHook';

function App() {
  const ourList=['item1','item2','item3',1]
  const { response, error, isLoading } = useAxios({ url: 'http://localhost:8000/freelances', method: 'GET' });
  const list= response&&response.freelancersList;
  return (
    <div className="App">
      <ItemsList list={ourList}/>
      <EmployeList list={list} error={error} isLoading={isLoading}/>
    </div>
  );
}

export default App;
