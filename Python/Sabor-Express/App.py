#Apresentação
print("""
      𝒮𝒶𝒷ℴ𝓇 ℰ𝓍𝓅𝓇ℯ𝓈𝓈
      
1 - Cadastrar Restaurante
2 - Listar Restaurantes
3 - Ativar Restaurante
4 - Sair
""")
#Input
opcaoEscolhida=int(input("Digite a Opção Escolhida: "))
#Processamento de Dados
if opcaoEscolhida==1:
    print("\nCadastrar Restaurante")
elif opcaoEscolhida==2:
    print("\nListar Restaurantes")
elif opcaoEscolhida==3:
    print("\nAtivar Restaurante")
else:
    print("\nEncerrando o programa...")