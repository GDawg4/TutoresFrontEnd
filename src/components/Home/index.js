import React from 'react'
import {View, Text} from "react-native";
import {connect} from "react-redux";
import * as selectors from '../../reducers'
import Button from "../Button";
import {Link} from "react-router-dom";

const Home = ({token}) => (
    <View>
        {
            token && <Text>Bienvenido</Text>
        }
        {
            !token &&
            <View>
                <Text>
                    <Link to={'/'}>
                        Favor ingrese a una cuenta
                    </Link>
                </Text>
            </View>
        }
    </View>
)

export default connect(
    state => ({
        token:selectors.getAuthToken(state)
    }),
    undefined
)(Home)
