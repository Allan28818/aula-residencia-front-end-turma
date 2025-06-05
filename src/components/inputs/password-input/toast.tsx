import { error } from 'console';
import { ToastContainer, TypeOptions, toast } from 'react-toastify';

export default function App() {
  const notify = () => {
    if NotFound(){
      toast.error('Perfil atualizado com sucesso!');
    }else{
      toast.success('Perfil atualizado com sucesso!');
    }
  }
  return (
    <div className="torrada">
      <button onClick={notify}></button>
      <ToastContainer
        autoClose={1500}
        pauseOnHover={false}
      />
    </div>
  );
}