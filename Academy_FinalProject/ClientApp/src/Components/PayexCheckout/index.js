import React from 'react';



export default class CheckOut extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            checkinUrl: '',
            paymentSuccessfull: false
        }
    }
    

    componentDidMount() {
        this.getCheckinUrl();
        
    }

    getCheckinUrl = async () => {
        fetch('https://localhost:44307/api/Checkout/GetConsumerSession',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((result) => {
                this.setState({ checkinUrl: result.operations[1].href });
            })
            .catch((error) => { console.log(error); });
    }

    renderCheckin = () => {
        //TODO: POST PRICE WITH CONSUMERPROFILEREF
        let price = this.props.price
        //-------------------------------------
        let script = document.createElement('script');
        script.async = true;
        console.log(this.state.checkinUrl)
        script.src = this.state.checkinUrl;
        script.addEventListener("load", function (e) {

            window.payex.hostedView.consumer({
                container: "checkin",
                culture: 'nb-NO',
                onConsumerIdentified: function (consumerIdentifiedEvent) {

                    let checkin = document.getElementById('checkin')
                    checkin.remove()
                    console.log(consumerIdentifiedEvent);
                    var request = new XMLHttpRequest();
                    request.addEventListener('load', (e) => {
                        let res = JSON.parse(request.responseText);
                        console.log(JSON.parse(res))
                        let renderPaymentMenuUrl = JSON.parse(res).operations.find(((o) => o.rel === 'view-paymentorder')).href
                        let script = document.createElement('script');
                        script.src = renderPaymentMenuUrl;
                        script.onload = () => {
                            window.payex.hostedView.paymentMenu({
                                container: 'payment-menu',
                                culture: 'nb-NO',
                                onPaymentCompleted: function (paymentCompletedEvent) {
                                    console.log(paymentCompletedEvent);
                                    let payexMenu = document.getElementById('payexMenu');
                                    payexMenu.remove();
                                    let paymentCompleted = document.getElementById('paymentSuccessfull')
                                        paymentCompleted.className ='paymentSuccessfullText';
                                        paymentCompleted.innerHTML ='<h3> payment succsessfull </h3>';

                                },
                                onPaymentFailed: function (paymentFailedEvent) {
                                    console.log(paymentFailedEvent);
                                },
                                onPaymentCreated: function (paymentCreatedEvent) {
                                    console.log(paymentCreatedEvent);
                                },
                                onPaymentToS: function (paymentToSEvent) {

                                    console.log(paymentToSEvent);
                                },
                                onPaymentMenuInstrumentSelected: function (paymentMenuInstrumentSelectedEvent) {
                                    console.log(paymentMenuInstrumentSelectedEvent);
                                },
                                onError: function (error) {
                                    console.error(error);
                                },
                                style: {
                                    body: {
                                        backgroundColor: "transparent",
                                    },
                                    input: {
                                        backgroundColor: "white",

                                        focus: {
                                            border: 'green'
                                        },
                                        invalid: {
                                            border: 'dotted 1px #FF7500'
                                        }
                                    },
                                    button: {
                                        borderRadius: '10px 10px 10px 10px',
                                        color: '#fff',
                                        backgroundColor: '#FF7500',
                                        font: "Arial",
                                        fontSize: '18px',
                                        width: '200px'
                                    },
                                    secondaryButton: {
                                        borderRadius: '10px 10px 10px 10px',
                                        color: '#fff',
                                        backgroundColor: '#FF7500',
                                        font: "Arial",
                                        fontSize: '18px',
                                        width: '200px',
                                    }
                                },
                            }).open();
                        };
                        var head = document.getElementsByTagName('head')[0];
                        head.appendChild(script);
                    })

                    request.open('POST', 'https://localhost:44307/api/checkout/SQTPaymentMenu', true);
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    request.send(JSON.stringify(consumerIdentifiedEvent.consumerProfileRef));

                },
                onShippingDetailsAvailable: function (shippingDetailsAvailableEvent) {
                    console.log(shippingDetailsAvailableEvent)
                },
                style: {
                    body: {
                        backgroundColor: "transparent",

                    },
                    input: {
                        backgroundColor: "white",
                        border: 'solid 4px #FF7500',

                        focus: {
                            border: 'green'
                        },
                        invalid: {
                            border: 'dotted 1px #f35151'
                        }
                    },
                    button: {
                        borderRadius: '10px 10px 10px 10px',
                        color: '#fff',
                        backgroundColor: '#FF7500',
                        font: "Arial",
                        fontSize: '18px',
                        width: '200px'
                    }

                },
            }).open();
        })
        document.getElementsByTagName('head')[0].appendChild(script);
    }


    render() {
        return (
            <div className='payexContainer' id='payexMenu'>
                <div id='checkin'></div>
                <div id='payment-menu'></div>
                {this.renderCheckin()}
            </div>
        )
    }
}

