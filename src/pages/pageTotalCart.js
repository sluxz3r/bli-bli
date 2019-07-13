import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '../data/data';
import '../assets/pageCarts.css';


class TotalCart extends Component{
    constructor(props) {
        super(props);
        let qty = this.props.location.qty - 1; 
        let price = this.props.location.price,
            image = this.props.location.image,
            name = this.props.location.name;
        this.state = {
                total: qty * price,
                act:0,
                index:'',
                newData:[]
        }

        let newData = this.state.newData
        if (this.state.act === 0) {
            let data = {
                qty, price, image, name
            }
            newData.push(data);
        }
        this.setState({
            newData:newData,
            act:0
        }) 
        console.log(newData)
    }

  
    render(){
        let data = this.state.newData;
        return(
            <div className="body">
                 
                <div style={{marginTop:"10px", width:"1230px", backgroundColor:"white"}}>
                <Link to='/'  >
                    <p style={{fontSize:"14pt", color:"#0095DA", position:"absolute", marginLeft:"20px"}}>&#8249; Belanja Lagi</p>
                </Link>    
                    <img style={{paddingLeft:"500px", height:"60px", width:"70px"}} src="https://www.blibli.com/faq/wp-content/uploads/2017/10/Blibli.com-FAQ-Belanja-Icon.png" />
                </div>
                <div style={{marginTop:"10px",padding: "20px", width:"1200px", backgroundColor:"white"}}>
                    <th style={{borderBottom:"2px solid #f1f1f1f8", paddingBottom:"10px", width:"1180px"}}>
                        <td style={{paddingRight:"280px", paddingLeft:'200px'}}>Pilih Semua Produk</td>
                        <td style={{paddingRight:"280px", color:"grey"}}>Harga</td>
                        <td style={{color:"grey"}}>Jumlah</td>
                        <td></td>
                    </th><br />

                    {data.map((data, i) =>
                    <th style={{borderBottom:"2px solid #f1f1f1f8", paddingBottom:"10px",height:"100px", width:"1180px"}}>
                        <td style={{width:"600px"}}>
                            <img style={{position:"absolute", width:'90px', height:'90px'}} src={data.image}/>
                            <span style={{paddingLeft:"150px", paddingRight:"50px"}}>{data.name}</span>
                        </td>
                        <td style={{paddingRight:"300px", color:"#F37021"}}>Rp{data.price}</td>
                        <td style={{paddingRight:"120px", color:"#F37021"}}>
                        {data.qty}
                        </td>
                        <td>Hapus</td>
                    </th>
                    )}
                </div>
                <div>
                    <div style={{position:"absolute"}}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAQlBMVEX////8si7wIiT7zXH+78z7AQH8+PfyU1T6vkz5qBD1iIj71JrycHH96+j63Nr83bf1nKD+9eT5yMj5saj2wLz5wJId4lQ+AAABlUlEQVQ4y2IYBaMAQNgYpFYQgDBUAhoQFdG5/1krhRY6f1HBRXy8+N84p8j8iZO/pIiw32TsDxfaocj1EmsvDUkfyacMCmS32dZkl/qnCwd4qw+AVSSAcaWjJAMXFIvj+1YLJBBWraGdrUMmI64pDue1HAlk6LzdRcCx8f1X3TUVgJOm5xpxRy2EHHm7wUBhkceumzinyuACiDmSiOujEFkvlxEc1EkIglR3JUtHWoFWahBChXL972fbmqmV9Wcf7ywfW29rE7ls3U89j1jvTo6856sdMkrNIAaBsMMMovggPvT+V63ZpZSf3Ru0QiYx40eGzNh7+a/h7xME9Go0wB8U/TahLJrYtiK19UoPaw2wVOVrVLb4xOu8ikBXghG2khWBYs7hkwYgOyMf8CBr+VjOF5wsUBAZNFue0didKfAZOoIA7vdbufmufjPYLgZXcF090Dmuj4G7vrisCu5OSIEBA0IQO+L+iQJZA5xcsMg4rAMLrnQirwOVgOoztVf0yU1z0sRp1d1v0/dPSpp7ZOy//kB9AxlmEqK2YhciAAAAAElFTkSuQmCC" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAP1BMVEX///8zRKgEGZePp8r6/P5tfbtUbbjs8fbT3uupyuLa6/XF1eS6xdz+78z7zXHIgTH5qBD+9eSOkbJGOob6vkxJegouAAABcElEQVQ4y+2R2U4lMQxEXeV4yTLALP//reN0Sxeky4V+4gVKiWM7Oq60Wn70PdRix7jVUWu+rVd7yDrqTiucCqwkXmtRxkPWmDJot2doM47U1/saMx+wyl57KHyEDUtbgKpKHUPCARfBA3ZSG1ShsEmYYeHIoY6kG1UCfcmSvLMPmkIAhytGgwt6UHeDhhAUhkogfscWBpX9zOkuDdYwkp2u2h0yCjcTNCx/74MZAl/WYTKoCemcwFI1GiCCuhJnv2cT1eyA7yQxl1cVuRsTUBMxYJ6/8U7tCO1M2m3F2W3nYRjygX6VNpSzZRaUfeUuc1Mz5EP26eXlScSIScQASDTpRMXP9ef5nwSondgjzF3ESY4LrPJ5+zQtFiywSQBgv8Am//62Ys5NFGM0p15gGzi3i9MkDMQKMpQuF2QE0QSHU5KuxJ5xhU2Suu2XWtfKnaVrrIA4JgwcTJB9JJhXWNUuMlRbGVuPWdlupvzo6/UfmJAJavcmAlIAAAAASUVORK5CYII=" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAZlBMVEX///8DBATXFRj5/P6goJ+qq6vs8fa4t7lxbG4pKCWQkJDj5OTycHGBgIHEw8T1iIjUFzn8+PdQUFDQ0NC7hYTyU1T3wr/18/f63Nr5sajk1drr7OvMqqjUS0TwIiT96+jetLf1nKCr4mEGAAABSElEQVRIx+2R3XKDIBCF1V1YRAEJakza9Of9X7K72KnJjExzkUuPIDvKN2cPVIcOvVDa+u63hIcfsC276swY3IrCsiyfz1vi+0czulzGoWn6Stks1PKJuFJPkA2T51O9SvqAlov2rRDTjaPt/shJ35OYK1cwvY7jF5/CHC4g3QKTrTPG6NWybAo9O0UI0imTk+xuSSnFJAnGs5CUySHOTVb23Lo1QvE87XtOTMI3Q7deyLucUezP8tJFz0qavUbpdsuZm3WA/LalnEOOGS7imXMqls73Y8nWYvp/zmnLmepNvpQzxlvDy/CQ09W5byena/Y858A3WcXQh+USwgzWrNLIaeU+yBjnYIfsOgDQmmfqIOXyDFmdlrE+e56ISqEiJG89JUKRQiRFxKsM2bADau8RvfxOymsk9F55Ih7XJKxKXKOtDh160A9+dRAB0ykCdgAAAABJRU5ErkJggg==" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAY1BMVEX////s8fbj5OT7wArc3NzQ0NBQUFC4t7kpKCVxbG78+PeBgIHFxMX+78yQkJCgoJ/97aP7zXH+1kn954br7Ov+9eSqq6v+0CwDBAT83bd0Q1fn2sP71JqhjFSRchuzlBn+4Rc/Mel5AAABlklEQVQ4y+2S2W7cMAxFSZqkJGuLl/FM0vX/v7J3Bm1RNPJDAhR9yZEhyssxSUj0wf9lru9WOX9+s3OptSLYy1Hfai4TWJ8ledv1FUIkxmP1afrJi2ceIcJ6ri7Pdfv+NfpO4ntr9CD8zsU2Vus0XSuBHv3bRhZTziUFDUdMlhuH1iHL0EWvl4IYbvELlurRkx+eYvDuGfGIM5EM+71OC7kr+S2jhCdN4Zack6fZ1eWITg5v3DC+R6FuMRr+s2kibyl6R0RSZJ99JyI7cynEGBvROm0kpMplZ6G9kO2kGOfuhtljfNSPGliM2YiZVQlrkzMXuVbM/ZaJtmmqYmTKAdlFgokJF7v3Kyfbu+Bd4PturcRqcHFnKiHQL1dpyAr5Ms+X+xm5EDKJsRTSwhDVuChUHrvzCmldr5ifaAir0AnzAg1cP8kYZD2nbsuy1ZmY58GgfwT/EVhICYSA9QMJzHTWrxR7EMwKLkZUykdryXNLKTtGPilcTU2saFFGNCoKt6cUQu8599Ba7v3Eff3470PIGB+8hx+ZERAx6QZ5mwAAAABJRU5ErkJggg==" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAkCAMAAAAEjmLyAAAAOVBMVEX///8JO5AKkdTF1eQ0pt5ws91NdZfa6/X5/P7s8fbI5vWu2vBTir8oUo3T3utLu+aYw+G6xdypuNABwmfiAAAAwUlEQVRIx+2S2w6DIBBExxUQVLTt/39sh8tD02ARY5s+eMzuGLOHbAy4+A1DX2VBEdPVMSjR7aFmDsjHmzTqmkykom0s5gazxxwzfPd4NJgWr6Mt2+Kw6eDzaG51E4jl4UK2mAaElkuJiNm37X2Jg37p2WfimZmT75BCHfUFc5SQMskhUyAKLFFWNJ9wkGKyfTY1YKnyRW4CZBOQEdum0GSjmuLdxLZJJiBkKM22WpFkrtz29H8rKFOf0VJH4+KPeQIK4AV0mcR/7gAAAABJRU5ErkJggg==" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAiCAMAAADWIlHSAAAAUVBMVEX///+qq6txbG7s8fbc3Ny4t7mhosKgoJ9QUFDF1eR0krLj5OTFxMWQkJDQ0NBNdZe6xdyPp8qpuNAoUo3a6/XT3uttfbuBgIHr7OsKPXdTir9C6A7KAAABVElEQVQ4y+2S607DMAyFHce5Oklz2QV4/wfFHtNgTBrS4B87ahK77Rf3uIGnnvpBfcLceev93vtd341uB/REBMnTTD353r3M+tT7a9SutV9r+VfvtzW31SGvsa1tQD6k8ZoOmypvaTv07cBXbJpz+JzmW06yjJRlzmOXO2iQht/DmHlKrNcL/J0s2UfRGmOsn2mIeAktQDN30ILlxWG45FGJC0v3UDBahmS0EApYF6uTm8GdWD6hthUWZ/qe5a/+CNFp7rDW2GzFYwDEgFVZQ4qaRsbaoLtxY/gKV4xVaAZCKROd2LDQogVjilFXDYAaOAJywLeej9qz45k1KIoERoAC4IyoKOj4G+c+TNcKcGYdEjHrN+vQgiq1ANdyMTSti5XNmeVouNTLP9Jes/DFtNtGRxS/DvHEolMPURdz6iEJbyQDK3s9KnaPklQM/+bUP/VP9A4SvwzyTzXTVQAAAABJRU5ErkJggg==" />

                    </div>
                    <div style={{height:"73px", padding:'5px', width:"387px", marginLeft:"700px"}}>
                        <div style={{position:'absolute',width:"180px", height:'69px'}}>
                            <p style={{margin:'0px'}}>Total Belanja</p>
                            <p style={{margin:'0px',fontWeight:'bold', fontSize:'16pt' , color:"#F37021"}}>Rp</p>
                        </div>
                        <Link to={{pathname:"/pay/", total:this.state.total}}  >
                        <button style={{
                                        marginLeft:'190px', 
                                        height:'60px', 
                                        width:'170px', 
                                        borderRadius:'10px',
                                        borderColor:'#F37021',
                                        backgroundColor:"#f37021",
                                        fontSize:"16pt",
                                        color:'white'
                                        }}>Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default TotalCart;