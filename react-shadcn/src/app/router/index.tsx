import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AuthLayout } from '@/ui/layouts/AuthLayout';
import { Home } from '@/ui/pages/home';
import { OptimisticUpdate } from '@/ui/pages/optimistic-updates';
import { Pagination } from '@/ui/pages/pagination';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/optimistic-updates" element={<OptimisticUpdate />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
