from locust import HttpUser,TaskSet,task
from faker import Faker

class listagem(TaskSet):

    def on_start(self):
        self.faker = Faker()

    @task()
    def adicao_usuarios(self):
        self.client.post("/" , json = {
            "nome": self.faker.name(),
            "email" : f"{self.faker.firts_name().lower()}@gmail.com",
            "cpf" : "12345678909"
        })

class aplicacao(HttpUser):
    tasks = [
        listagem
    ]