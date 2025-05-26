import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'i4UWLcciqXhUhzmTqBK94m3uyeAmzm6K',
    socket: {
    host: 'redis-10514.c325.us-east-1-4.ec2.redns.redis-cloud.com',
    port: 10514
}
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('foo', 'bar');
const result = await client.get('foo');
console.log(result) 

/*async function logar(){
  // var contrasenha = document.getElementById("senha").value;
  var usuario =  document.getElementById("user").value;
  if (usuario == result){
    alert("Acesso liberado");
    window.open("https://github.com/s");
  } else{
  alert("Acesso negado");
  }
}*/