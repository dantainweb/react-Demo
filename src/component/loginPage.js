import React, { PureComponent } from 'react'

export default class LoginPage extends PureComponent {

    render() {
        return (
            <form>
                帳號：<input type="text" /><br />
                密碼：<input type="password" />
            </form>


        )
    }
}