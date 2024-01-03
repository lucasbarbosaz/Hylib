import styled from 'styled-components';

export const ModalDialog = styled.div`
    @media (min-width: 576px) {
        max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : "500px"};
        margin: 1.75rem auto;
    }

    height: 80%;
    position: relative;
    width: 100%;
    margin: .5rem;
    pointer-events: none;
    outline: 0;
`;
export const ModalContent = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    height: ${({ height }) => height ? `${height}` : "auto"};
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
`;
export const ModalHeader = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #3a3a3a;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
`;
export const ModalBody = styled.div`
    /* max-height: calc(100% - 120px); */
    overflow-y: auto;

    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
`;
export const ModalFooter = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #3a3a3a;

    >:not(:last-child) {
        margin-right: .25rem;
    }
    >:not(:first-child) {
        margin-left: .25rem;
    }
`;