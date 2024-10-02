import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Tanpa judul", // default: Untitled
    description: "Tidak ada deskripsi", // default: No description provided
  },
  components: {
    callout: {
      note: "Catatan", // default: Note
      abstract: "Abstrak", // default: Abstract
      info: "Info", 
      todo: "Todo",
      tip: "Tip",
      success: "Sukses", // default: Success
      question: "Pertanyaan", // default: Question
      warning: "Peringatan", // default: Warning
      failure: "Kegagalan", // default: Kegagalan
      danger: "Bahaya", // default: Danger
      bug: "Bug",
      example: "Contoh", // default: Example
      quote: "Kutipan", // default: Quote
    },
    backlinks: {
      title: "Tautan balik", // default: Backlinks
      noBacklinksFound: "Tidak menemukan tautan balik", // default: No backlinks found
    },
    themeToggle: {
      lightMode: "Mode terang", // default: Light mode
      darkMode: "Mode gelap", // default: Dark mode
    },
    explorer: {
      title: "Jelajah", // default: Explorer
    },
    footer: {
      createdWith: "Dibuat oleh", // default: Created with
    },
    graph: {
      title: "Tampilan Grafik", // default: Graph View
    },
    recentNotes: {
      title: "Catatan Terkini", // default: Recent Notes
      seeRemainingMore: ({ remaining }) => `Lihat ${remaining} lainnya →`, // default: See ${remaining} more
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transkrip dari ${targetSlug}`, // default: Translude of ${targetSlug}
      linkToOriginal: "Tautan ke sumber asli", // default: Link to original
    },
    search: {
      title: "Pencarian", // default: Search
      searchBarPlaceholder: "Mencari sesuatu", // default: Search for something
    },
    tableOfContents: {
      title: "Kerangka Konten", // default: Table of Contents
    },
    contentMeta: {
      readingTime: ({ minutes }) => `baca ${minutes} menit`, // default: ${minutes} min read
    },
  },
  pages: {
    rss: {
      recentNotes: "Catatan terkini", // default: Recent notes
      lastFewNotes: ({ count }) => `${count} catatan terakhir`, // default: Last ${count} notes
    },
    error: {
      title: "Tidak ditemukan.", // default: Not Found
      notFound: "Halaman ini bersifat pribadi atau tidak ada.", // default: Either this page is private or doesn't exist.
      home: "Kembali ke Beranda", // default: Return to Homepage
    },
    folderContent: {
      folder: "Folder",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 catatan dalam folder ini." : `${count} catatan dalam folder ini.`, // default: "1 item under this folder." : `${count} items under this folder.`
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 catatan dengan tag ini." : `${count} catatan dengan tag ini.`, // default: "1 item with this tag." : `${count} items with this tag.`
      showingFirst: ({ count }) => `Tampilkan ${count} tag pertama.`, // default: `Showing first ${count} tags.`
      totalTags: ({ count }) => `Menemukan total ${count} tag.`, // default: `Found ${count} total tags.`
    },
  },
} as const satisfies Translation
