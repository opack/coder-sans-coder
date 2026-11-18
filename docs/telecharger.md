<script setup>
import { withBase } from 'vitepress'
</script>

# Télécharger le guide

## En PDF

Le guide complet, en un seul document, pour le lire hors ligne ou l'imprimer.

<p><a class="download-btn" :href="withBase('/coder-sans-coder.pdf')" download>⬇ Télécharger le PDF</a></p>

## En version texte pour Claude

Voir [Donner ce guide à Claude](/annexes/pour-claude).

## Sur une seule page

Le [guide complet sur une seule page](/guide-complet), pratique pour faire une recherche avec `Ctrl+F`.

<style>
.download-btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  background: var(--vp-c-brand-3);
  color: #fff !important;
  font-weight: 600;
  text-decoration: none !important;
}
.download-btn:hover { background: var(--vp-c-brand-2); }
</style>
