# Sanity CMS - Instruções de Configuração

## 1. Criar Projeto no Sanity

Acesse https://www.sanity.io/manage e crie um novo projeto.

## 2. Obter Credenciais

No painel do projeto, copie:
- **Project ID**
- **Dataset** (geralmente "production")

## 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
```

## 4. Instalar Sanity CLI (opcional)

Para gerenciar o CMS localmente:

```bash
npm install -g @sanity/cli
sanity login
```

## 5. Deploy do Studio (opcional)

Para hospedar o painel de administração:

```bash
cd sanity
sanity deploy
```

## 6. Estrutura de Dados

### Categorias Obrigatórias:
- problemas-comuns
- manutencao
- custos
- dicas-rapidas

### Posts:
Cada post deve ter:
- Título e slug
- Resumo (excerpt)
- Conteúdo em rich text
- Categoria (reference)
- Data de publicação
- Tempo de leitura
- Imagem de capa (URL)
- Tags
- FAQ (opcional)
- Mensagem do CTA WhatsApp

## 7. Automação Futura

A estrutura está pronta para receber posts via API do Sanity.
Documentação: https://www.sanity.io/docs/http-api
