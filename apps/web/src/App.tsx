import { hmsModules } from '@hms/shared';

export function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32 }}>
      <h1>Hospital Management System</h1>
      <p>Starter workspace for core hospital operations.</p>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {hmsModules.map((module) => (
          <article key={module.key} style={{ border: '1px solid #d9e2ec', borderRadius: 12, padding: 16 }}>
            <h2>{module.displayName}</h2>
            <p>{module.permissions.length} starter permissions configured.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
