headerLogin = document.querySelector('.headerLogin');
headerCadastro = document.querySelector('.headerCadastro');

headerLogin.style.color = '#fff';
headerCadastro.style.color = '#000';
headerCadastro.style.cursor = 'pointer';

function changeBox(cond){
    if(cond){
        headerLogin.style.color = '#000';
        headerLogin.style.backgroundColor = '#dfe3eb';
        headerLogin.style.cursor = 'pointer';
        loginForm.style.display = 'none';

        headerCadastro.style.color = '#fff';
        headerCadastro.style.backgroundColor = 'var(--back3)';
        cadastroBox.style.display = 'block';
    }else{
        headerCadastro.style.color = '#000';
        headerCadastro.style.backgroundColor = '#dfe3eb';
        headerCadastro.style.cursor = 'pointer';
        loginForm.style.display = 'block';


        headerLogin.style.color = '#fff';
        headerLogin.style.backgroundColor = 'var(--back3)';
        cadastroBox.style.display = 'none';
    }
}

function loginIndex(email, password){


}