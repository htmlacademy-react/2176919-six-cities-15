import { useAppSelector, useAppDispatch } from '../../../../hooks';
import './error-message.css';
import { setError } from '../../../../store/selectors';
import { fetchOffersAction } from '../../../../store/api-actions';

function ErrorMessage(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const error = useAppSelector(setError);

  return (error)
    ?
    <div style={{margin: '47vh 30vw'}}>
      <b style={{display:'block', marginBottom: '15px',fontSize:'32px'}}>{error}</b>
      <button onClick={() => {
        dispatch(fetchOffersAction());
      }}
      >To try one more time.
      </button>
    </div>
    : null;
}

export default ErrorMessage;
