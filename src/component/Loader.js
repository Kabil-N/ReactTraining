import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";
function Load()
{
        return (
        <FallBackContainer>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                // timeout={3000} //3 secs
            />
          </FallBackContainer>
        );
}

export default Load;


const FallBackContainer=styled.div`
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`