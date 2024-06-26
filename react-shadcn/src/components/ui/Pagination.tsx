import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/app/libs/utils';

import { Button, IButtonProps } from './Button';

function Pagination({ className, ...props }: React.ComponentProps<'nav'> & { className?: string }) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  );
}
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'> & { className?: string }
>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'> & { className?: string }
>(({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />);
PaginationItem.displayName = 'PaginationItem';

type PaginationButtonProps = {
  isActive?: boolean;
} & IButtonProps;

function PaginationButton({ isActive, ...props }: PaginationButtonProps) {
  return (
    <Button
      aria-current={isActive ? 'page' : undefined}
      variant={isActive ? 'outline' : 'ghost'}
      size="icon"
      {...props}
    />
  );
}
PaginationButton.displayName = 'PaginationLink';

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationButton> & { className?: string }) {
  return (
    <PaginationButton
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Anterior</span>
    </PaginationButton>
  );
}
PaginationPrevious.displayName = 'PaginationPrevious';

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationButton> & { className?: string }) {
  return (
    <PaginationButton
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span>Próxima</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationButton>
  );
}
PaginationNext.displayName = 'PaginationNext';

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'> & { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
};
