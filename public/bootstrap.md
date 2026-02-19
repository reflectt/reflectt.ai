# Reflectt Node Bootstrap

Canonical first-run flow.

## 1) Install runtime
```bash
curl -fsSL https://www.reflectt.ai/install.sh | bash
```

## 2) Verify install
```bash
openclaw --version
openclaw status
```

## 3) Clone and run reflectt-node
```bash
git clone https://github.com/reflectt/reflectt-node.git
cd reflectt-node
npm install
npm run build
NODE_ENV=production node dist/index.js
```

## 4) Health check (new shell)
```bash
curl -s http://127.0.0.1:4445/health | grep -q '"status":"ok"' && echo ok
```

## 5) First-use checks
```bash
curl "http://127.0.0.1:4445/tasks/next?agent=<agent_name>"
curl "http://127.0.0.1:4445/inbox/<agent_name>"
```

Then continue cloud setup at https://app.reflectt.ai/bootstrap.
