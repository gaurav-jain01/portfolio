import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { StrictMode } from 'react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
  document.head.innerHTML = '<meta name="theme-color" content="#141512" />';
});

test('project filters show the matching projects and preserve repository links', async () => {
  render(<App />);
  expect(screen.getAllByRole('article')).toHaveLength(5);
  expect(screen.getByRole('link', { name: 'View Tasktic on GitHub' })).toHaveAttribute('href', 'https://github.com/gaurav-jain01/taskTic-backend');
  fireEvent.click(screen.getByRole('button', { name: 'Desktop', exact: true }));
  await waitFor(() => expect(screen.getAllByRole('article')).toHaveLength(1));
  expect(screen.getByRole('heading', { name: 'CYE Compiler' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Web & AI', exact: true }));
  await waitFor(() => expect(screen.getAllByRole('article')).toHaveLength(4));
  expect(screen.getByRole('heading', { name: 'RepoGuardian AI' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Tasktic', exact: true })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'All projects' }));
  await waitFor(() => expect(screen.getAllByRole('article')).toHaveLength(5));
});

test('theme choice persists across mounts and updates browser color', () => {
  const { unmount } = render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  expect(localStorage.getItem('portfolio-theme')).toBe('light');
  expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute('content', '#f5f4ed');
  unmount();
  render(<App />);
  expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeInTheDocument();
});

test('animation preference can be paused and resumed', () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Pause animations' }));
  expect(container.querySelector('[data-motion]')).toHaveAttribute('data-motion', 'off');
  fireEvent.click(screen.getByRole('button', { name: 'Resume animations' }));
  expect(container.querySelector('[data-motion]')).toHaveAttribute('data-motion', 'on');
});

test('mobile navigation closes on Escape, restores focus, and closes on selection', async () => {
  render(<App />);
  const menu = screen.getByRole('button', { name: 'Open menu' });
  fireEvent.click(menu);
  expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument();
  fireEvent.keyDown(document, { key: 'Escape' });
  await waitFor(() => expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument());
  expect(menu).toHaveFocus();
  fireEvent.click(menu);
  fireEvent.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', { name: 'Projects' }));
  await waitFor(() => expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument());
});

test('copy email reports success only after writing, and explains failures', async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Copy email address' }));
  expect(await screen.findByText('Email copied!')).toBeInTheDocument();
  expect(writeText).toHaveBeenCalledWith('jaingau01@gmail.com');
  writeText.mockRejectedValue(new Error('Permission denied'));
  fireEvent.click(screen.getByRole('button', { name: 'Copy email address' }));
  expect(await screen.findByText(/Select the email address to copy/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'jaingau01@gmail.com', exact: true })).toHaveAttribute('href', 'mailto:jaingau01@gmail.com');
});


test('project case studies expose contributions and keep contact actions available', async () => {
  render(<App />);
  const project = screen.getByRole('article', { name: 'Tasktic' });
  const summary = within(project).getByText('Read case study');
  fireEvent.click(summary);
  expect(project.querySelector('details')).toHaveAttribute('open');
  await waitFor(() => expect(within(project).getByRole('heading', { name: 'My contribution' })).toBeVisible());
  fireEvent.click(summary);
  expect(project.querySelector('details')).not.toHaveAttribute('open');
  expect(screen.getByRole('button', { name: 'View resume' })).toHaveAttribute('aria-haspopup', 'dialog');
  expect(screen.getByRole('link', { name: '+91 6376806029' })).toHaveAttribute('href', 'tel:+916376806029');
});

test('resume opens a PDF preview with download and restores focus and scrolling on close', () => {
  render(<StrictMode><App /></StrictMode>);
  const trigger = screen.getByRole('button', { name: 'View resume' });
  trigger.focus();
  fireEvent.click(trigger);

  const dialog = screen.getByRole('dialog', { name: 'Gaurav Jain’s resume' });
  expect(dialog).toHaveAttribute('open');
  expect(screen.getByTitle('Gaurav Jain resume PDF')).toHaveAttribute('src', '/resume.pdf#view=FitH&toolbar=0&navpanes=0');
  expect(within(dialog).getByRole('link', { name: 'Download PDF' })).toHaveAttribute('download', 'Gaurav_Jain.pdf');
  expect(within(dialog).getByRole('link', { name: 'Download PDF' })).toHaveAttribute('href', '/resume.pdf');
  expect(within(dialog).getByRole('link', { name: 'Open PDF in a new tab' })).toHaveAttribute('target', '_blank');
  expect(document.body.style.overflow).toBe('hidden');

  fireEvent.click(screen.getByRole('button', { name: 'Close resume preview' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
  expect(document.body.style.overflow).toBe('');

  fireEvent.click(trigger);
  fireEvent(screen.getByRole('dialog'), new Event('cancel', { bubbles: false, cancelable: true }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();

  fireEvent.click(screen.getByRole('button', { name: 'Resume', exact: true }));
  fireEvent.click(screen.getByRole('heading', { name: 'Gaurav Jain’s resume' }));
  expect(screen.getByRole('dialog')).toHaveAttribute('open');
  fireEvent.click(screen.getByRole('dialog'), { clientX: -10, clientY: -10 });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe('');
});
