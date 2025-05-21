// components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next'
import { BoxSwitcher } from '../styles/language-switcher.styles'
import { t } from 'i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <BoxSwitcher>
        <span>{t('language')}:</span>
      <select onChange={handleChange} value={i18n.language}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </BoxSwitcher>
  )
}
