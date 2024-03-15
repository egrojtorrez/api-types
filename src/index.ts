import app from './app'
import { PORT } from './config/config'

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
