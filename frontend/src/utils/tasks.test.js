import { describe, it, expect } from 'vitest';
import { countByStatus, completionRate } from './tasks';

/**
 * Tests des fonctions utilitaires (tasks.ts)
 *
 * Ces tests sont écrits en JavaScript : même structure qu'en Python avec pytest :
 *
 *   Python (pytest)                       JavaScript (Vitest)
 *   from tasks import completionRate      import { completionRate } from './tasks';
 *   class TestCompletionRate:             describe('completionRate', () => { ... });
 *   def test_xxx():                       it('xxx', () => { ... });
 *   tasks = [...]                         const tasks = [...];
 *   assert resultat == 3                  expect(resultat).toBe(3);
 *   assert resultat == {"a": 1}           expect(resultat).toEqual({ a: 1 });
 *
 * () => { ... } est une fonction sans nom : l'équivalent d'un def.
 *
 * toBe    → compare une valeur simple (nombre, texte, booléen)
 * toEqual → compare le contenu d'un objet ou d'un tableau
 */

// =============================================================================
// PARTIE 1 : TESTS EXEMPLES (lisez-les !)
// =============================================================================

describe('countByStatus', () => {
  it('compte les tâches de chaque statut', () => {
    // ARRANGE : préparer une liste de tâches
    const tasks = [
      { status: 'todo' },
      { status: 'todo' },
      { status: 'done' },
    ];

    // ACT : appeler la fonction à tester
    const counts = countByStatus(tasks);

    // ASSERT : vérifier le résultat
    expect(counts).toEqual({
      todo: 2,
      in_progress: 0,
      done: 1
    });
  });

  it('renvoie des zéros pour une liste vide', () => {
    const counts = countByStatus([]);

    expect(counts).toEqual({
      todo: 0,
      in_progress: 0,
      done: 0
    });
  });
});
q

describe('completionRate', () => {

  it('calcule le pourcentage de tâches terminées', () => {
    // ARRANGE : créer 4 tâches dont 2 terminées
    const tasks = [
      { status: 'todo' },
      { status: 'done' },
      { status: 'in_progress' },
      { status: 'done' },
    ];

    // ACT : calculer le taux de complétion
    const result = completionRate(tasks);

    // ASSERT : vérifier le résultat
    expect(result).toBe(50);
  });

  it('renvoie 100 quand toutes les tâches sont terminées', () => {
    // ARRANGE : créer 2 tâches terminées
    const tasks = [
      { status: 'done' },
      { status: 'done' },
    ];

    // ACT : calculer le taux
    const result = completionRate(tasks);

    // ASSERT : vérifier le résultat
    expect(result).toBe(100);
  });

  it('renvoie 0 pour une liste vide', () => {
    // ARRANGE : créer une liste vide
    const tasks = [];

    // ACT : calculer le taux
    const result = completionRate(tasks);

    // ASSERT : vérifier le résultat
    expect(result).toBe(0);
  });

});
