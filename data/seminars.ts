import { ASSETS } from '@/lib/constants';

/**
 * Definiert die Struktur eines Events (Banner)
 */
export interface SeminarEvent {
    badge: string;       // z.B. "Demnächst!"
    title: string;       // z.B. "ZAMA Netzwerktreffen 2025"
    dateLocation: string; // z.B. "Am 7. und 8. November im Westin Leipzig"
    buttonText: string;  // z.B. "SEI DABEI!"
    video: string;       // Pfad zum Video
}

/**
 * Definiert die Struktur eines Seminars (Kachel & Detailansicht)
 */
export interface Seminar {
    title: string;
    image: string;

    // Kurzer Text für die Kachel-Übersicht (Teaser)
    shortDescription: string;

    // Langer Text für die Detail-Seite (ausführlich)
    fullDescription: string;

    // Metadaten für die Sidebar in der Detail-Ansicht
    details: {
        duration: string; // z.B. "1 Tag (9:00 - 17:00 Uhr)"
        price: string;    // z.B. "Auf Anfrage"
        format: string;   // z.B. "Präsenz-Seminar"
    };
}

/**
 * ------------------------------------------------------------------
 * HIER SEMINARE BEARBEITEN
 * ------------------------------------------------------------------
 */

// 1. Das Banner-Event (Netzwerktreffen etc.)
export const currentEvent: SeminarEvent = {
    badge: "Demnächst!",
    title: "ZAMA Netzwerktreffen 2025",
    dateLocation: "Am 7. und 8. November im Westin Leipzig",
    buttonText: "SEI DABEI!",
    video: ASSETS.VIDEOS.SEMINARS_TEASER,
};

// 2. Die Liste der Seminare
// HINWEIS: Du kannst für 'fullDescription' auch HTML-ähnliche Zeilenumbrüche nutzen, 
// aber das ist hier ein reiner Text-String.
export const seminars: Seminar[] = [
    {
        title: "Praxischeck - Potentialfindung",
        image: "/assets/seminare/Praxischeck/Zama_Seminare_1_by_Christoph_Neumann_Hochformat_ffb4932a68.webp",
        shortDescription: "Durchschnittlich 25-30% der Honorare geht durch fehlende Dokumentation verloren...",
        fullDescription: "Durchschnittlich 25-30% der Honorare geht durch fehlende Dokumentation verloren. In unserem Praxischeck analysieren wir deine Abrechnungsprozesse, identifizieren ungenutztes Potential und geben dir konkrete Handlungsempfehlungen. Ziel ist es, deine Praxis wirtschaftlich zu stärken, ohne dass du mehr arbeiten musst.",
        details: {
            duration: "1 Tag (9:00 - 17:00 Uhr)",
            price: "Auf Anfrage",
            format: "Präsenz-Seminar"
        }
    },
    {
        title: "Alles Endo oder was?",
        image: "/assets/seminare/alles endo/3_Zama_Seminare_by_Christoph_Neumann_Kopie_2214f0ff0b.webp",
        shortDescription: "Ein großer Stellenwert in der Praxis hat oftmals die Endodontische Behandlung.",
        fullDescription: "Ein großer Stellenwert in der Praxis hat oftmals die Endodontische Behandlung. Wir zeigen dir, wie du Endo-Leistungen korrekt kalkulierst, abrechnest und gegenüber Patienten kommunizierst. Von der Aufklärung bis zur Rechnungsstellung – für eine erfolgreiche Endodontie in deiner Praxis.",
        details: {
            duration: "1 Tag (9:00 - 17:00 Uhr)",
            price: "Auf Anfrage",
            format: "Präsenz-Seminar"
        }
    },
    {
        title: "ZE Richtlinien: Nach der Krone ist vor der Krone!",
        image: "/assets/seminare/ze richtlinien/7_Zama_Seminare_by_Christoph_Neumann_Kopie_ae07299d73.webp",
        shortDescription: "Gesamtplanung vs. Vorbehandlung. Worauf kommt es bei einer ZE Planung an...",
        fullDescription: "Gesamtplanung vs. Vorbehandlung. Worauf kommt es bei einer ZE Planung an? Wir gehen tief in die Richtlinien ein, besprechen Fallbeispiele und klären die häufigsten Stolpersteine. Damit deine ZE-Anträge sicher durchgehen und du keine Honorareinbußen hast.",
        details: {
            duration: "1 Tag (9:00 - 17:00 Uhr)",
            price: "Auf Anfrage",
            format: "Präsenz-Seminar"
        }
    },
    {
        title: "Die Zeit danach: 2 Jahre PA! Und dann?",
        image: "/assets/seminare/die zeit danach/4_Zama_Seminare_by_Christoph_Neumann_Kopie_1645c5c1e4.webp",
        shortDescription: "Was passiert wenn die 2 Jahresfrist der PAR Therapie vorbei ist...",
        fullDescription: "Was passiert wenn die 2 Jahresfrist der PAR Therapie vorbei ist? Wie geht es weiter mit UPT und der langfristigen Betreuung? Wir klären die rechtlichen Rahmenbedingungen und zeigen dir, wie du deine PA-Patienten nachhaltig und wirtschaftlich sinnvoll weiterbetreust.",
        details: {
            duration: "Halbtags (14:00 - 18:00 Uhr)",
            price: "Auf Anfrage",
            format: "Präsenz-Seminar"
        }
    },
    {
        title: "Von der Katze zum Löwen",
        image: "/assets/seminare/von der katze zu Löwen/Zama_Workshops_Neu_Sanduhr_Christoph_neumann_70ee7c038b.webp",
        shortDescription: "Die Führungskraft ist der Fluglotse in der Zahnarztpraxis.",
        fullDescription: "Die Führungskraft ist der Fluglotse in der Zahnarztpraxis. In diesem Seminar lernst du, wie du dich von einer unsicheren Führungskraft (Katze) zu einer souveränen Leader-Persönlichkeit (Löwe) entwickelst. Führung ist erlernbar – und wir zeigen dir die Werkzeuge dafür.",
        details: {
            duration: "2 Tage",
            price: "Auf Anfrage",
            format: "Workshop"
        }
    },
    {
        title: "Vom Hamsterrad zum Yogafrosch",
        image: "/assets/seminare/vom Hamsterrad/1_Zama_Seminare_by_Christoph_Neumann_Kopie_a700eb8b50.webp",
        shortDescription: "Ein Unternehmen zu führen ist fast so wie 'Eltern' werden...",
        fullDescription: "Ein Unternehmen zu führen ist fast so wie 'Eltern' werden. Manchmal dreht man sich im Kreis (Hamsterrad). Wir zeigen dir Wege zu mehr Gelassenheit, besserem Zeitmanagement und einer gesunden Work-Life-Balance – damit du entspannt und fokussiert (Yogafrosch) deine Praxis steuern kannst.",
        details: {
            duration: "1 Tag (9:00 - 17:00 Uhr)",
            price: "Auf Anfrage",
            format: "Workshop"
        }
    },
    {
        title: "Die Macht der Worte",
        image: "/assets/seminare/die Macht der Worte/6_Zama_Seminare_by_Christoph_Neumann_Kopie_a055d1443a.webp",
        shortDescription: "Kommunikationstraining für dich und dein Team...",
        fullDescription: "Kommunikationstraining für dich und dein Team. Wie sagst du es dem Patienten? Wie sprichst du Konflikte im Team an? Worte haben Macht. Lerne, sie gezielt und positiv einzusetzen, um Missverständnisse zu vermeiden und deine Ziele zu erreichen.",
        details: {
            duration: "1 Tag (9:00 - 17:00 Uhr)",
            price: "Auf Anfrage",
            format: "Workshop"
        }
    },
    {
        title: "Ein bunt gewürfelter Haufen",
        image: "/assets/seminare/ein bunt gewürfter/Zama_Seminare_8_by_Christoph_Neumann_09c4b222fb.webp",
        shortDescription: "Eine Veränderung des Teams kann ganz unterschiedliche Ursachen haben...",
        fullDescription: "Eine Veränderung des Teams kann ganz unterschiedliche Ursachen haben. Wie formst du aus Individuen ein starkes Team? Wir arbeiten an Teambuilding, Rollenverständnis und gemeinsamer Vision. Damit aus dem bunten Haufen eine geschlossene Einheit wird.",
        details: {
            duration: "1 Tag (9:00 - 17:00 Uhr)",
            price: "Auf Anfrage",
            format: "Teambuilding"
        }
    },
    {
        title: "Fit für die Praxisbegehung",
        image: "/assets/seminare/fit für die Praxisbegegnung/9_Zama_Seminare_by_Christoph_Neumann_Hochformat_Neu_1_6a7e2a6c55.webp",
        shortDescription: "Dir steht eine Praxisbegehung bevor oder du möchtest dein Hygienemanagement optimal gestalten?",
        fullDescription: "Dir steht eine Praxisbegehung bevor oder du möchtest dein Hygienemanagement optimal gestalten? Wir gehen Schritt für Schritt die Anforderungen durch, prüfen deine Unterlagen und machen deine Praxis 'behördensicher'. Keine Angst vor dem Amt!",
        details: {
            duration: "1 Tag (9:00 - 17:00 Uhr)",
            price: "Auf Anfrage",
            format: "Beratung / Seminar"
        }
    },
    {
        title: "Hygieneschulung für das Praxisteam",
        image: "/assets/seminare/hygiene Schulung/2_Zama_Seminare_by_Christoph_Neumann_Hochformat_Neu_1_6a7e2a6c55.webp",
        shortDescription: "Wir bringen die Fortbildung in Deine Praxis...",
        fullDescription: "Wir bringen die Fortbildung in Deine Praxis. Hygieneschulung ist Pflicht – aber sie muss nicht langweilig sein. Wir schulen dein Team praxisnah, aktuell und verständlich zu allen relevanten Hygienevorschriften.",
        details: {
            duration: "Halbtags (ca. 4 Std.)",
            price: "Auf Anfrage",
            format: "Inhouse-Schulung"
        }
    }
];
