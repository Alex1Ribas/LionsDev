bcrypt = realiza a enciptação da senha utilizando hash
 |-> a senha é encriptada usando bcrypt.hash(senha, salt) onde salt é o tamanho do hash, sendo que quanto maior mais tempo para criptografar.
 |-> usa-se o bcrypt.compare(senha, usuario.senha) para encriptar a senha e comparar com a senha encriptada no banco de dados

json web token (jwt) = usa os dados do usuario para gerar um token usando como base o secret_token
 |-> o secret token é obtido em geradores na web com tamanho gerealmente usado de 256
 |-> é usado o dotenv para armazenar o token_secret salvando como: ACESS_TOKEN_SECRET =
 |-> para criar um token a partir do secret usa-se jwt.sing(usuario, ACESS_TOKEN_SECRET) que recebe os dados do usuario e gera a partir da secret