import style from './PulseLoader.module.css';
import clsx from '../utils/clsx';

// Colors and size could be parameterized, but for the sake of simplicity, I'm not doing it
const PulseLoader = () => {
  return (
    <div className={style.container} role="alert" aria-busy="true">
      <div className={style.core}></div>
      <div className={clsx(style.pulse, style.pulse__inner)}></div>
      <div className={clsx(style.pulse, style.pulse__outer)}></div>
    </div>
  );
};

export default PulseLoader;
