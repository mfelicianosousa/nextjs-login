import React from 'react'
import styles from '../login/login.module.css'
import LoginCard from '../components/LoginCard'
import Input from '../components/input';
import Button from '../components/button';
import Link from 'next/link';

export default function CadastroPage() {
  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua Conta">
        <form className={styles.form}>
            <Input type="text" placeholder="Seu email"/>
            <Input type="email" placeholder="Seu email"/>
            <Input type="password" placeholder="Sua senha"/>
            <Button>Cadastrar</Button>
            <Link href="/login">Já possui uma conta?</Link>
        </form> 
      </LoginCard>
    </div>
  )
}
