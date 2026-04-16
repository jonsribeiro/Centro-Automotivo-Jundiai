# Script de População do Sanity

Script Node.js para criar posts e categorias no Sanity CMS automaticamente.

## Pré-requisitos

1. **Obter token de API do Sanity:**
   - Acesse: https://www.sanity.io/manage/personal/project/d287d4gd
   - Vá em **API > Tokens**
   - Clique em **Add API token**
   - Nome: `Populate Script`
   - Permissões: **Editor**
   - Copie o token gerado (começa com `sk`)

2. **Configurar variáveis de ambiente:**

   Na raiz do projeto, crie um arquivo `.env`:

   ```env
   SANITY_API_TOKEN=sk_seu_token_aqui
   SANITY_PROJECT_ID=d287d4gd
   SANITY_DATASET=production
   ```

## Como usar

### Executar o script:

```bash
npm run sanity:populate
```

Ou diretamente:

```bash
npx tsx scripts/populate-sanity/index.ts
```

### Modo dry-run (simulação):

Para ver o que seria criado sem realmente criar:

```bash
npm run sanity:populate:dry
```

## O que será criado

### Categorias (3):
- Manutenção
- Problemas Comuns
- Custos

### Posts (5):
1. **Troca de óleo em Jundiaí** - Categoria: Manutenção
2. **Sinais de desgaste nos freios** - Categoria: Problemas Comuns
3. **Suspensão barulhenta** - Categoria: Problemas Comuns
4. **Alinhamento e balanceamento** - Categoria: Manutenção
5. **Revisão preventiva** - Categoria: Manutenção

Cada post contém:
- Título otimizado para SEO
- Slug amigável
- Excerpt (resumo)
- Conteúdo em Rich Text (Portable Text)
- FAQ com 4-5 perguntas
- Tags relevantes
- Tempo de leitura

## Estrutura dos arquivos

```
scripts/populate-sanity/
├── index.ts        # Script principal
├── client.ts       # Configuração do cliente Sanity
├── posts-data.ts   # Conteúdo dos posts
└── types.ts        # Tipos TypeScript
```

## Personalização

Para adicionar novos posts, edite o arquivo `posts-data.ts` seguindo o formato existente.

## Troubleshooting

**Erro: "SANITY_API_TOKEN não encontrado"**
- Verifique se o arquivo `.env` existe na raiz do projeto
- Confirme que o token está correto

**Erro: "Token inválido"**
- Gere um novo token no painel do Sanity
- Certifique-se de que o token tem permissão "Editor"

**Posts não aparecem no site**
- Verifique se o post foi criado como "published" (não draft)
- Confira os logs do script para ver se houve erro
- Aguarde alguns segundos após a criação (CDN do Sanity)
