from django.db import models

class usuario(models.Model):
    nome= models.CharField(max_length=35)
    email=models.EmailField(max_length=35)

    def __str__(self) -> str:
        return f'{self.nome} | {self.email}'
    


class financas(models.Model):
    renda_mensal=models.DecimalField('Renda',decimal_places=2,max_digits=8)
    despesas=models.DecimalField('Despesas',decimal_places=2,max_digits=8)
    lucro=models.DecimalField('Lucro',decimal_places=2,max_digits=8)
    objetivo=models.DecimalField('Meta',decimal_places=2,max_digits=8)
    meses=models.IntegerField('Meses',default=12)

    def save(self, *args, **kwargs):
        # Calcula o lucro automaticamente
        self.meses = self.objetivo / self.lucro
        self.lucro = self.renda_mensal - self.despesas



        if self.lucro > 0:
            self.meses = self.objetivo / self.lucro  # Meses é calculado dividindo objetivo pelo lucro
        else:
            self.meses = None    
    
        super(financas, self).save(*args, **kwargs)


    def __str__(self):
        return f"Renda: {self.renda_mensal}, Despesas: {self.despesas}, Lucro: {self.lucro}, Meta: {self.objetivo}, Meses: {self.meses} "
    
    


    