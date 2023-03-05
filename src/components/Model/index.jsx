import React from 'react';

const Model = () => {
    return (
        <>
            <div className="modal-container flex" data-modal="form-article-modal">
                <div className="modal-container-box mr-auto">
                    <div className="general-box-3 pd-3 form-article">
                        <div className="general-box-header flex pd-top-0 pd-left-0 pd-right-0 pd-bottom-3">
                            <div className="general-box-header-icon">
                                <icon name="plus-magic" className="flex mr-auto"></icon>
                            </div>
                            <label className="color-4 flex-column text-nowrap mr-auto-top-bottom">
                                <h4 className="bold text-nowrap">Formulário</h4>
                                <h6 className="text-nowrap">Envie sua resposta para <b>Laxus</b>.</h6>
                            </label>
                        </div>
                        <div className="general-box-content flex-column mr-top-3">
                            <div className="form-article-info flex mr-bottom-3">
                                <div className="form-article-info-author">
                                    <img src="&head_direction=3&direction=2&gesture=sml"/>
                                </div>
                                <label className="flex-column text-nowrap color-4 pd-1 pd-left-none mr-auto-top-bottom">
                                    <h4 className="bold">Titulo do model</h4>
                                    <h6>Noticia postada por <b>Laxus</b> em <b> tempo</b>.</h6>
                                </label>
                            </div>
                            <form method="POST" className="send-form-article flex-column" data-article-id="">


							<div className="md-input flex-column">
								<label className="color-4 mr-bottom-1">
									<h5 className="bold">asdasdasd:</h5>
								</label>
								<textarea className="form-input" name="<?= $value['input_id']; ?>" placeholder="<?= $Function::filter('xss', $value['input_string']); ?>..."></textarea>
								<div className="input-errors"></div>
							</div>
                                <div className="form-poll flex-column">
                                    <label className="color-4 mr-bottom-1">
                                        <h5 className="bold">a:</h5>
                                    </label>
                                    <div className="form-polls flex-column">

									<div className="color-4 flex">
										<input type="radio" name="a" value="" id="a" className="form-input" checked="checked" required="required"/>
										<label for="a" className="mr-auto-top-bottom mr-left-1">
											<h5>b</h5>
										</label>
									</div>
                                    </div>
                                </div>

                                <div className="flex width-content">
                                    <button className="green-button-1 flex" type="submit" style={{width: "100%", height: "50px"}}>
                                        <label className="color-1 mr-auto pointer-none">
                                            <h5 className="uppercase bold">Enviar formulário</h5>
                                        </label>
                                    </button>
                                </div>
                                <div className="form-warns flex"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model;