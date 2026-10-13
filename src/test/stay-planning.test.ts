import { describe, it, expect } from 'vitest';
import { getStayNights } from '@/lib/stay-planning';
describe('Stay planning', () => {
  it('counts nights across a month boundary', () => { expect(getStayNights('2026-10-30', '2026-11-02')).toBe(3); });
  it('rejects departure before arrival', () => { expect(getStayNights('2026-11-02', '2026-10-30')).toBe(0); });
  it('rejects empty dates', () => { expect(getStayNights('', '')).toBe(0); });
});
