import IconButton from '@material-ui/core/IconButton';
import style from './index.module.css';
import imageErro from './error404.png'
import DirectionsRunTwoToneIcon from '@material-ui/icons/DirectionsRunTwoTone';
function NotFund() {


    return (
        <section className={style.main} >
            <img className={style.icon} src={imageErro} />
            <IconButton color="inherit" aria-label="menu">
                <DirectionsRunTwoToneIcon />
                Voltar
            </IconButton>
        </section>
    )
}

export default NotFund;
