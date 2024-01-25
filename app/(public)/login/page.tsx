'use client';

import styles from './login.module.css'
import Link from 'next/link';
import LoginCard from '../../components/loginCard';
import Input from '../../components/input';
import Button from '../../components/button';

const Login = () => {
    return (
        <div className={styles.background}>
           <LoginCard title="Entre na sua Conta">
              <form className={styles.form}>
                 <Input type="email" placeholder="Digite seu email"/>
                 <Input type="password" placeholder="Digite sua senha"/>
                 <Button>Entrar</Button>
                 <Link href="/cadastro">Ainda não possui conta?</Link>
              </form> 
           </LoginCard>
        </div>
    )
}
export default Login