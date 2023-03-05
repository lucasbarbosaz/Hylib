import React from "react";
import { useHistory } from 'react-router-dom';
import Head from '../../components/Head';
import Header from '../../components/Header';
import StoreContext from "../../store/Context";

const NotFound = () => {
    const { config } = React.useContext(StoreContext);

    const history = useHistory();

    const returns = () => {
        history.push('/');
    }
    return (
        <>
        <Head/>
		<div className="container flex-column margin-bottom-min">
			<div className="content">
				<Header/>
				<div className="webcenter flex-column">
					<div className="error-container flex">
						<div className="margin-auto flex-column">
							<div className="error-container-image"></div>
							<label className="gray margin-bottom-min text-center">
								<h2 className="bold margin-bottom-minm">Nada encontrado!</h2>
								<h5>Parece que a página que você estava procurando não foi encontrada!<br/>Verifique o endereço para ver se tudo está correto ou na duvida contade a um membro da equipe!</h5>
							</label>
							<button className={`${config.cmsStyles.buttonsClass} margin-auto-left-right`} style={{width: "179px", height: "45px"}} onClick={returns}>
								<label className="margin-auto white">Voltar</label>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    );
}

export default NotFound;