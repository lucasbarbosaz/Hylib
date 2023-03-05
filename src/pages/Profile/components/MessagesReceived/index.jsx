import React from "react";

const MessagesReceived = ({
    isLoadingUserData,
    userData,
}) => {
    return (
        <div className="general-box errands padding-none overflow-hidden margin-top-min height-fit">
            <div className="general-box-header-3 padding-md">
                <label className="gray">
                    {isLoadingUserData && (
                        <>
                            <h5 className="bold">Recados de ...</h5>
                            <h6>
                                Os recados que amigos de ... que deixaram aqui!
                            </h6>
                        </>
                    )}
                    {!isLoadingUserData && (
                        <>
                            <h5 className="bold">
                                Recados de {userData.username}
                            </h5>
                            <h6>
                                Os recados que amigos de {userData.username} que
                                deixaram aqui!
                            </h6>
                        </>
                    )}
                </label>
            </div>
            <div className="general-box-content bg-2 padding-md">
                <div className="errands-area flex-column">
                    <div className="errands-area-box-nothing margin-bottom-minm flex padding-min">
                        <label className="gray margin-auto-left-right">
                            {isLoadingUserData && (
                                <h5>Parece que... não tem recados!</h5>
                            )}
                            {!isLoadingUserData && (
                                <h5>
                                    Parece que {userData.username} não tem
                                    recados!
                                </h5>
                            )}
                        </label>
                    </div>
                </div>
                <div className="flex margin-top-min">
                    <label className="gray flex-column">
                        <h6 className="fs-12 margin-bottom-minm">
                            Você não pode deixar uma mensagem por enquanto, mas
                            aqui estão as mensagens que seus amigos deixam para
                            você! Se alguma mensagem contiver algo ofensivo ou
                            que não lhe agrade, pode eliminá-la ou, em casos
                            mais graves, denunciar a pessoa que deixou a
                            mensagem para a nossa equipae
                        </h6>
                        <h6>
                            Reserve algum tempo para ler nosso{" "}
                            <a className="bold">termos e condições</a> para
                            evitar punições.
                        </h6>
                    </label>
                </div>
            </div>
        </div>
        
    )
}

export default MessagesReceived;
