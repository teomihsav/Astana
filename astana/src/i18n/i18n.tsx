import i18n from "i18next";
import { addLocale } from "primereact/api";
import { initReactI18next } from "react-i18next";
import { en } from "./languages/en";
import { de } from "./languages/de";
import { fr } from "./languages/fr";
import { es } from "./languages/es";
import { it } from "./languages/it";
import { bg } from "./languages/bg";

const resources = {
  en: {
    translation: en
  },
  de: {
    translation: de
  },
  fr: {
    translation: fr
  },
  es: {
    translation: es
  },
  it: {
    translation: it
  },
  bg: {
    translation: bg
  }
}

addLocale('es', {
  firstDayOfWeek: 1,
  dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'],
  monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  today: 'Hoy',
  clear: 'Limpiar'
});

addLocale('de', {
  dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  today: 'Heute',
  clear: 'Löschen'
});

addLocale('fr', {
  dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  dayNamesShort: ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
  dayNamesMin: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
  monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  monthNamesShort: ['jan', 'fév', 'mars', 'avr', 'mai', 'jui', 'juil', 'août', 'sept', 'oct', 'nov', 'dec'],
  today: 'Aujourd',
  clear: 'Clair'
});
addLocale('it', {
  dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
  giornoNomiCorti: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  giornoNomiMin: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  monthNames: ['gennaiov', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre',
    'dicembre'],
  monthNamesShort: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
  oggi: 'Oggi',
  chiaro: 'Chiaro'
});

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;