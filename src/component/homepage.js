import React, { Component } from 'react';
import Slideshow from './slideshow' 
import '../assets/homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="uppersmall">
                    <div>
                        <img src="https://www.static-src.com/frontend/static/img/usp-number-one.5ceacbe.png" />
                        <span>Customer Satisfaction #1</span>
                    </div>
                    <div>
                        <img src="https://www.static-src.com/frontend/static/img/usp-free-shipping.16dca2c.svg" />
                        <span>Gratis Ongkir</span>
                    </div>
                    <div>
                        <img src="https://www.static-src.com/frontend/static/img/usp-badge.fa19e2d.svg" />
                        <span>100% orisinil</span>
                    </div>
                    <div>
                        <img src="https://www.static-src.com/frontend/static/img/usp-return.d639c5c.svg" />
                        <span>15 Hari Retur</span>
                    </div>
                    <div>
                        <img src="https://www.static-src.com/frontend/static/img/usp-truck.887f6ed.svg" />
                        <span>Pengiriman Cepat</span>
                    </div>
                    <div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9IiMwMDk1REEiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEwLjgwOSA4Ljg5MmM3LjcwMy0yLjc3NSAxOC4yOTctMi43NzYgMjYtLjAwMXYxNC4wODhhMTcuOTA2IDE3LjkwNiAwIDAgMS05LjE1IDE1LjYyNmwtMy44NSAyLjE0My0zLjg0Ny0yLjE0M0ExNy45MDYgMTcuOTA2IDAgMCAxIDEwLjgxIDIyLjk4VjguODkyem0yOC43MjctMS40Yy0uMDEzLS4wNDUtLjAxLS4wOTYtLjAzLS4xNFY3LjM1Yy0uMDIzLS4wNTUtLjA2OS0uMDk0LS4wOTgtLjE0NC0uMDYzLS4xMDYtLjEyLS4yMTUtLjIwNS0uMzAxLS4wNTYtLjA1NS0uMTMxLS4wODYtLjE5NC0uMTMxLS4wODYtLjA2MS0uMTY0LS4xMy0uMjYzLS4xNy0uMDA0LS4wMDMtLjAwNi0uMDA3LS4wMTEtLjAwOS04LjY1LTMuNDU5LTIxLjIwNC0zLjQ1OS0yOS44NSAwbC0uMDEzLjAwOGMtLjA5LjAzNy0uMTYuMTAyLS4yNC4xNTYtLjA3Mi4wNDktLjE1My4wODUtLjIxNS4xNDYtLjA2Ny4wNjctLjEwNy4xNTQtLjE1OC4yMzMtLjA0OS4wNzEtLjExLjEzLS4xNDUuMjExbC0uMDAyLjAwNWMtLjAxNS4wMzctLjAxMi4wODItLjAyNS4xMi0uMDQ1LjE0LS4wODUuMjgxLS4wODYuNDI0TDggNy45MDRWMjIuOThjMCA3LjUwNyA0LjA2IDE0LjQ0IDEwLjU5OSAxOC4wOTNsNC41MjggMi41MjNhMS40MDcgMS40MDcgMCAwIDAgMS4zNjMgMGw0LjUzMi0yLjUyM2M2LjUzNy0zLjY1MyAxMC41OTgtMTAuNTg2IDEwLjU5OC0xOC4wOTNWNy45MDRsLS4wMDEtLjAwNmMtLjAwMS0uMTM4LS4wNC0uMjcyLS4wODMtLjQwNnoiLz4KICAgICAgICA8cGF0aCBkPSJNMjEuODIyIDMwLjQwMWwuMDYtLjAwMWMuNDQyLS4wMTcuODYtLjIyIDEuMTQ0LS41NTZMMzQuMTggMTYuNzc4Yy4yNzYtLjMyMy40MTItLjczNC4zOC0xLjE1OGExLjU5MSAxLjU5MSAwIDAgMC0xLjcwNi0xLjQ3Yy0uNDI1LjAzMS0uODEuMjI5LTEuMDg1LjU1MUwyMS43MzEgMjYuNDZsLTQuMzYzLTQuMzgyYTEuNTg3IDEuNTg3IDAgMCAwLTIuMjQ3IDAgMS42MDQgMS42MDQgMCAwIDAgMCAyLjI1NWw1LjU3NyA1LjZhMS41OSAxLjU5IDAgMCAwIDEuMTI0LjQ2OHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                        <span>Pembayaran Aman</span>
                    </div>
                    <div>
                        <img src="https://www.static-src.com/frontend/static/img/usp-call.c0c0663.svg" />
                        <span>24/7 Customer Service</span>
                    </div>
                </div>
                <div className="upperhome row">
                    <div className="lefthome">
                        <h2>Isi Ulang & Pembayaran</h2>
                        <ul className="fitur">
                            <li className="paymentitem">
                                <div className="icons">

                                    <img src="https://www.static-src.com/frontend/static/img/phone-credit.bb772a6.svg" />
                                </div>
                                <span>pulsa</span>
                            </li>
                            <li className="paymentitem">
                                <div className="icons">

                                    <img src="https://www.static-src.com/frontend/static/img/electricity-credit.befdeca.svg" />
                                </div>
                                <span>Token PLN</span>
                            </li>
                            <li className="paymentitem">
                                <div className="icons">

                                    <img src="https://www.static-src.com/frontend/static/img/water-bill.6a9f08a.svg" />
                                </div>
                                <span>Tagihan Air</span>
                            </li>
                            <li className="paymentitem">
                                <div className="icons">

                                    <img src="https://www.static-src.com/frontend/static/img/emoney.23fcba9.svg" />
                                </div>
                                <span>E-Money</span>
                            </li>
                            <li className="paymentitem">
                                <div className="icons">

                                    <img src="https://www.static-src.com/frontend/static/img/game-voucher.53d01dc.svg" />
                                </div>
                                <span>Voucher Game</span>
                            </li>
                            <li className="paymentitem">
                                <div className="icons">

                                    <img src="https://www.static-src.com/frontend/static/img/data-package.17d0987.svg" />
                                </div>
                                <span>Paket Data</span>
                            </li>
                            <li className="paymentitem">
                                <div className="icons">

                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAgCAMAAACPf244AAABHVBMVEUAAAC8tbq0hbySesCD1Pj3pB+oiLSwgbD5sVh8xuKf4P77rFP6s2D6slX5sln6sFmTer9NvuL5sFv4rD6xhq1Gt+yBZK/4q1CYebKh3vP4qy+Reb/0nzOzjbHOx7Y4td+DZK9Xu9OR2vv2qE35r1S1jq2Kb7dcvOVuy/WMdLovuuD6ri3zmzGM1vOf4P6TesCj0+Gj4f16u85ewfBhxeD6smB8xtk6sOeAYa1WuNDxkiWu4PGl2uuAYq/1oT/5sFj4qEzzmjPxlCb7rR+pdbSMcbo4seiHarVFt+pUve6tfLdxzfNhw/EswOb8uj6L1/dIx+mW2/xqyPI1w+c/xOj7tDJ6zvZWyusiveQqqeR51O9kzu2YbrGm4/89vOdvQTbjAAAAPXRSTlMACf7+/v0n6ykh/hjz8bqWjOvdxsWLi0ZE7OjjvrAu5+fFh4JraV5EKh338+Pgv7+vk21d7cfDwcGvlmFE/OM5MAAAA2lJREFUSMdt1tdaIkEQBWAGia5EUfLKqqiYw7pGlByGKIiK6f0fY+tUT0/3qIfPCwv9PTXTAi4VIxkJx0OheDiyaWjj25PD9OLDweHJjT5NRY+yCwvZo2hRTVV+RZbuZSqh8G8xDa6nPz4WFx8oo9Ho2JqWogRRmshCHlM9xoZGIfdhA/ObD2V5PJ7RMU+3IAGjB3Fm3nDUOlcUY3d396EAnjnRrKenp1Gaa0SZgsQx3T5lBeKkLMlasCjDYRLPHWpWr9d7SN9iegTMatZuNt3ulN0rrteCVWFsiG5BhzUZiW4ltihtWG23W3Yzzu1eloUAC+FarBNlWZPJxDMaHWAaJQgeg8D8BmMb33sxRgnjb4GSVh/fHGOaFQ5JwCh5XnLph15VYNai67bV7/fJen0NimoLbQECsxaN/NhLYLNl+oEd26LAev1HU5/dTGIJ6otWzl4oVq3Cmg1xJQ5sq9sliu4DpllQbJXLbo7hSv7Uq0qZDWeUTezZs63uhKy3t1PeU1LtsgnLLGJLdVTtXgisOvY8kxYC6xl7blkWaeUmYwlXWF+xwpSwarDqGfq1bWV1Om9kPf+laYosiVE10zT9rriy5AUTVs1LVn0Pd0CzOl2yGPMBw47Iu8lYSPVyWKTV68ThTGlWq0PWeIypolANAab1qmpWDRZjoGABa8GSGB46FnceVWERBUyuaVstClmPMawpKIU1/K7w9+tVE/EC4xugW5/jx8cpsJRaEtes0SAs4jyqmgZLHA1pIbCmf3A0ylpMYAlXUvaqfuuF4NCugNJ6TQc4tKustLlXg1N0GfptRJSF4B8nZltjYQ0wLdi1GtQLoWkEZ9XupSh7yx1pjWERNcCWPnW5LCuBl6AKJOdtlPEGsCUozXoZBLGlXovj4xdHor70mllYDucpBkyzXq4wLXy18i7EyEkKmF4sY4hiLYSsKVtrhlbMtvyYYtF9VQvFHEsGhTX/lNYuliyp86UviQSgoZeN8Re/1V10QBEmrW1MLyUmrZT2JpyD5GyWoV5YssXF5nJH9MKSInJHn/PjgcLEijkD8zOr13zO1uCKp1tlJyY/Hqhy1/qWywExDa6skUbWgM9XUExLqwVty4SqpX+kus7te717mWXHR6rtlYu13c9Y7M+pPk2tXhbeG35/oqhN/wMK4M57lyGNugAAAABJRU5ErkJggg==" />
                                </div>
                                <span>Lainnya</span>
                            </li>
                        </ul>
                    </div>
                    <div className="splitter"></div>
                    <div className="righthome">
                        <h2>Blibli Travel</h2>
                        <ul className="fitur">
                            <li className="travelitem">
                                <div className="icons">
                                    <img src="https://www.static-src.com/frontend/static/img/flight.f1da955.svg" />

                                </div>
                                <span>Tiket Pesawat</span>
                            </li>
                            <li className="travelitem">
                                <div className="icons">

                                    <img src="https://www.static-src.com/frontend/static/img/hotel.ca6dd0f.svg" />
                                </div>
                                <span>Hotel</span>
                            </li>
                            <li className="travelitem">
                                <div className="icons">
                                    <img src="https://www.static-src.com/frontend/static/img/train.f7ace88.svg" />
                                </div>
                                <span>Tiket Kereta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lowerhome slide">
                    <Slideshow className="slider"/>
                </div>

            </div>
        );
    }
}

export default Homepage;