import React from "react";
import Head from "../../components/Head";
import Header from "../../components/Header";
import StoreContext from "../../store/Context";

const HabboWay = () => {
    const { config } = React.useContext(StoreContext);

    return (
        <>
            <Head alert={alert} />
            <Header visited="home" />
            <div className="webcenter flex-column">
                <div className="flex">
                    <div className="col-19 flex-column">
                        <div className="general-box-3 flex-column pd-0 overflow-hidden">
                            <p>- Qualquer tipo de item emprestado de qualquer natureza, ser&aacute; de responsabilidade pr&oacute;pria do usu&aacute;rio. N&atilde;o nos responsabilizaremos por itens emprestados e roubados. N&atilde;o &eacute; permitido passar sua senha a qualquer tipo de pessoa, nem charear contas. Caso seja hackeado, n&atilde;o nos responsabilizaremos por nada que seja roubado de sua conta. Declaramos que emprestar, dar, trocar, qualquer tipo de coisa &eacute; de responsabilidade pr&oacute;pria do usu&aacute;rio;</p>

                            <p>- O uso de qualquer programa (script) que lhe d&ecirc; alguma vantagem juntamente com o abuso de FALHAS e BUGS resultar&aacute; em banimento;</p>

                            <p>- &Eacute; proibida a compra e venda de raros, diamantes ou duckets por dinheiro real sem o acompanhamento de um gerente ou CEO. Usu&aacute;rios que participarem de tais vendas ser&atilde;o banidos permanentemente por tr&aacute;fico ilegal;</p>

                            <p>- N&atilde;o aceite raros de outros jogadores. Estes itens s&atilde;o exclusivos e podem ser de origem ilegal. Raros de tr&aacute;ficos resultam em banimento para todos os envolvidos;</p>

                            <p>- Nunca entre em sites que te promete raros, moedas, duckets e/ou qualquer tipo de coisa no {config.hotel.name}. Tome muito cuidado ao acessar sites de terceiros;</p>

                            <p>- Ofender um usu&aacute;rio pode levar a banimento de at&eacute; 3 dias. N&atilde;o pratique bullying, racismo, ou algo semelhante. Se houver den&uacute;ncia, a nossa equipe de colaboradores ir&aacute; agir;</p>

                            <p>- N&atilde;o &eacute; permitido: difamar, abusar, atormentar, atacar, amea&ccedil;ar, fazer coment&aacute;rios raciais, coment&aacute;rios homof&oacute;bicos, anti&eacute;ticos ou de outra forma desagrad&aacute;vel que viole a seguran&ccedil;a e/ou os direitos legais (tais como direitos de privacidade e publicidade) de outros;</p>

                            <p>- Publica&ccedil;&atilde;o de outros jogos leva o usu&aacute;rio a banimento permanente;</p>

                            <p>- A troca de itens no {config.hotel.name} em outros jogos, principalmente no HABBO n&atilde;o &eacute; permitida. Se for efetuado o mesmo, ser&aacute; banido permanente as contas envolvidas.</p>

                            <p>- Por motivos de seguran&ccedil;a, nunca use a mesma senha no {config.hotel.name} igual a de outros jogos;</p>

                            <p>- N&atilde;o &eacute; permitido criar uma falsa identidade, ou fingir ser qualquer pessoa ou entidade, para enganar outros ou para qualquer outro prop&oacute;sito;</p>

                            <p>- N&atilde;o &eacute; permitido solicitar a senha de usu&aacute;rios do {config.hotel.name}. Isso pode levar a banimento permanente;</p>

                            <p>- N&atilde;o &eacute; permitido: se passar por algu&eacute;m da equipe do {config.hotel.name} e oferecer cargos, raros, duckets ou diamantes. Isso pode resultar em banimento permanente da sua conta;</p>

                            <p>- Bug de itens/moedas dentro do jogo &eacute; ilegal. O banimento para estes usu&aacute;rios &eacute; permanente;</p>

                            <p>- Efetuar amea&ccedil;as para a equipe do {config.hotel.name} pode lhe causar problemas, assim sendo banido por um tempo indeterminado;</p>

                            <p>- Quartos com nomes expl&iacute;citos, ilegais, racistas, que expressam algum tipo de ofensa, ser&atilde;o fechados com o nome &quot;Inappropriate Name&quot;, e o dono do quarto ser&aacute; banido por at&eacute; 48 horas na primeira vez. Nas pr&oacute;ximas vezes o usu&aacute;rio pode receber banimento permanente;</p>

                            <p>- Usu&aacute;rios que passam suas senhas a outros, s&atilde;o de responsabilidade pr&oacute;pria. Caso haja roubo, n&atilde;o nos responsabilizaremos por isso. Passar senhas &eacute; ILEGAL no {config.hotel.name}, ou seja, n&atilde;o damos suporte a esse tipo de ocorr&ecirc;ncia;</p>

                            <p>- N&atilde;o &eacute; permitido qualquer tipo de protesto, manifesta&ccedil;&atilde;o, etc. O infrator que criar algum quarto que introduz algum manifesto ou incentive a outros usu&aacute;rios &agrave; fazerem protesto, ser&aacute; banido por um tempo de no m&iacute;nimo 3 dias, podendo chegar at&eacute; mesmo banimento de 30 dias. N&atilde;o permitimos qualquer tipo de tumulto criado pelo mesmo;</p>

                            <p>- Mesmo sendo VIP, utilize seus comandos com modera&ccedil;&atilde;o, sempre respeitando os usu&aacute;rios;</p>

                            <p>- &Eacute; proibido FLOOD e SPAM em salas p&uacute;blicas, eventos, ou em quartos que n&atilde;o s&atilde;o seus.</p>

                            <p>- &Eacute; proibido atrapalhar eventos e resist&ecirc;ncias, usu&aacute;rios que fizerem isto podem sofrer puni&ccedil;&otilde;es que ser&atilde;o determinadas por algum membro da equipe.&nbsp;</p>

                            <p>Obs: As altera&ccedil;&otilde;es aqui na {config.hotel.name} Etiqueta ser&atilde;o divulgadas em nossa aba de not&iacute;cias.</p>

                            <p><em>"As normas existem para a obedi&ecirc;ncia dos tolos e a orienta&ccedil;&atilde;o dos s&aacute;bios."</em></p>

                            <br />
                            <p><strong>Equipe do {config.hotel.name}</strong></p>

                            <p><strong>Atualizado em 11/03/2021</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HabboWay;